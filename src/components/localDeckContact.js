const STORAGE_KEY = 'yellowstone.deck-contact.v1';
const CONTACT_LIMITS = { first_name: 80, last_name: 80, phone: 20, email: 254, zip: 5 };
const LIFETIME = 2 * 60 * 60 * 1000;

export function formatPhone(value) {
  const digits = String(value).replace(/\D/g, '');
  const countryCode = digits.startsWith('1') && (digits.length > 10 || String(value).startsWith('+1'));
  const number = (countryCode ? digits.slice(1) : digits).slice(0, 10);
  const prefix = countryCode ? '+1 ' : '';
  if (!number) return countryCode ? '+1' : '';
  if (number.length < 3) return prefix + number;
  if (number.length === 3) return `${prefix}(${number})`;
  if (number.length <= 6) return `${prefix}(${number.slice(0, 3)}) ${number.slice(3)}`;
  return `${prefix}(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`;
}

export default function initContactDraft(root, { listen, later }) {
  const fields = [...root.querySelectorAll('.inline-lead-form input[name], #estF input[name], #zipIn')]
    .map(element => ({ element, key: element.id === 'zipIn' ? 'zip' : element.name }))
    .filter(({ key }) => Object.hasOwn(CONTACT_LIMITS, key));
  let contact = {};
  const normalize = (key, value) => {
    if (key === 'phone') return formatPhone(value);
    if (key === 'zip') return String(value).replace(/\D/g, '').slice(0, 5);
    return String(value).slice(0, CONTACT_LIMITS[key]);
  };
  try {
    const saved = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY));
    if (saved && saved.expires > Date.now()) {
      for (const key of Object.keys(CONTACT_LIMITS)) {
        if (typeof saved.contact?.[key] === 'string') contact[key] = normalize(key, saved.contact[key]);
      }
    } else window.sessionStorage.removeItem(STORAGE_KEY);
  } catch (error) { /* Forms also work when storage is unavailable. */ }

  // Prefer anything the browser has already filled over the session draft.
  fields.forEach(({ element, key }) => {
    if (element.value) contact[key] = normalize(key, element.value);
  });
  const persist = () => {
    try { window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ expires: Date.now() + LIFETIME, contact })); }
    catch (error) { /* Keep synchronizing within this page without storage. */ }
  };
  const restore = () => fields.forEach(({ element, key }) => {
    if (Object.hasOwn(contact, key)) element.value = contact[key];
  });
  const remember = values => {
    Object.keys(CONTACT_LIMITS).forEach(key => {
      if (typeof values[key] === 'string') contact[key] = normalize(key, values[key]);
    });
    restore();
    persist();
  };
  fields.forEach(({ element, key }) => {
    const update = event => {
      if (event.isComposing) return;
      const caret = element.selectionStart;
      const atEnd = caret === element.value.length;
      const digitsBefore = key === 'phone' ? element.value.slice(0, caret ?? 0).replace(/\D/g, '').length : 0;
      contact[key] = normalize(key, element.value);
      const editingDeletion = event.inputType?.startsWith('delete');
      fields.forEach(field => {
        if (field.key === key && (field.element !== element || !editingDeletion)) field.element.value = contact[key];
      });
      if (key === 'phone' && !editingDeletion && document.activeElement === element) {
        let position = element.value.length;
        if (!atEnd && digitsBefore) {
          let seen = 0;
          position = [...element.value].findIndex(character => /\d/.test(character) && ++seen === digitsBefore) + 1;
        }
        element.setSelectionRange(position, position);
      }
      persist();
    };
    listen(element, 'input', update);
    listen(element, 'change', update);
    listen(element, 'blur', () => { element.value = normalize(key, element.value); });
  });
  [...new Set(fields.map(({ element }) => element.form).filter(Boolean))].forEach(form => {
    listen(form, 'reset', () => later(restore, 0));
  });
  listen(window, 'pageshow', restore);
  restore();
  return { restore, remember };
}
