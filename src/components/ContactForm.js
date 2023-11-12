export const ContactForm = ({
  name,
  number,
  onNameChange,
  onNumberChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={onNameChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={onNumberChange}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
