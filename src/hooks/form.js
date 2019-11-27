import { useState } from 'react';

function useForm(queuePublish, socketEmit) {
  const [values, setValues] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    socketEmit('words', values);
    queuePublish('deeds', 'work', values);
  };

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, handleChange, handleSubmit];
}

export default useForm;
