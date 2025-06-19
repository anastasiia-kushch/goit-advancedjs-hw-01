const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

const storedState = localStorage.getItem(storageKey);

if (storedState) {
  const { email, message } = JSON.parse(storedState);
  form.email.value = email;
  form.message.value = message;
}

form.addEventListener('input', function () {
  const currentState = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };

  localStorage.setItem(storageKey, JSON.stringify(currentState));
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!form.email.value || !form.message.value) {
    alert('Please fill out all fields before submitting!');
    return;
  }

  const formData = {
    email: form.email.value,
    message: form.message.value,
  };

  console.log('Form data: ', formData);
  form.reset();
  localStorage.removeItem(storageKey);
});
