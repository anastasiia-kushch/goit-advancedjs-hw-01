const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const storedState = localStorage.getItem(localStorageKey);

if (storedState) {
  const { email, message } = JSON.parse(storedState);
  form.elements['email'].value = email;
  form.elements['message'].value = message;
}

form.addEventListener('input', () => {
  formData.email = form.email.value.trim();
  formData.message = form.message.value.trim();

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (form.email.value.trim() === '' || form.message.value.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  formData.email = form.email.value.trim();
  formData.message = form.message.value.trim();

  console.log('FormData: ', formData);

  form.reset();
  localStorage.removeItem(localStorageKey);
});
