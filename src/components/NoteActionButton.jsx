import React from 'react';
// ! Btw ane namain jadi dataTestID soalnya biar nerima dari Parent nya gampang
const NoteActionButton = ({ label, variant, onClick, dataTestId }) => {
  return (
    // ? Onclick yang dari parameter itu isinya note.id jadi tinggal panggil aja di dalam attribute onClick dan di isi onClick yang dari parameter kalo label itu dari parent nya
    <button className={variant} onClick={onClick} data-testid={dataTestId}>{label}</button>
  );
};

export default NoteActionButton;