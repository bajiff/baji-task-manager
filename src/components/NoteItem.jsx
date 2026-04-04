// ? NoteItem.jsx
import React from 'react';
import { showFormattedDate } from '../utils';
import NoteActionButton from './NoteActionButton';

function NoteItem({ note, searchKeyword, onDelete, onArchive }) {
  // Fungsi untuk menyorot teks pencarian
  const highlightText = (text, keyword) => {
    // Jika kotak pencarian kosong, kembalikan teks aslinya
    if (!keyword) {
      return text;
    }

    // Membuat pisau pemotong menggunakan Regex (Case-Insensitive)
    const regex = new RegExp(`(${keyword})`, 'gi');

    // Memotong teks menjadi kepingan array
    const parts = text.split(regex);

    // Menyusun ulang teks, jika ada kepingan yang cocok, bungkus dengan <mark>
    return parts.map((part, index) => {
      if (part.toLowerCase() === keyword.toLowerCase()) {
        return <mark key={index}>{part}</mark>;
      }
      return part;
    });
  };

  return (
    <div className="note-item" data-testid="note-item" data-note-id={note?.id}>
      <div className="note-item__content" data-testid="note-item-content">
        {/* TODO [Basic] tampilkan judul catatan menggunakan note.title */}
        {/* TODO [Advanced] sorot kata kunci pencarian dalam judul menggunakan elemen <mark>. */}
        <h3 className="note-item__title" data-testid="note-item-title">
          {highlightText(note.title, searchKeyword)}
        </h3>
        {/* TODO [Basic] gunakan util showFormattedDate untuk menampilkan tanggal dibuat. */}
        <p className="note-item__date" data-testid="note-item-date">
          {showFormattedDate(note.createdAt)}
        </p>
        {/* TODO [Basic] tampilkan isi catatan dari note.body */}
        {/* TODO [Advanced] sorot kata kunci pencarian dalam isi menggunakan elemen <mark>. */}
        <p className="note-item__body" data-testid="note-item-body">
          {highlightText(note.body, searchKeyword)}
        </p>
      </div>
      <div className="note-item__action" data-testid="note-item-action">
        {/* TODO [Skilled] pecah tombol aksi menjadi komponen terpisah bernama `NoteActionButton` dengan menerima props `variant` dan `onClick` */}
        <NoteActionButton
          variant="note-item__delete-button"
          type="button"
          // TODO [Basic] panggil onDelete dengan id catatan.
          onClick={() => onDelete(note.id)}
          label="Delete"
          dataTestId="note-item-delete-button" />

        {/* TODO [Advanced] implementasikan tombol arsip untuk fitur mengarsipkan catatan */}
        <NoteActionButton
          variant='note-item__archive-button' dataTestId="note-item-archive-button"
          label={note.archived ? 'Pindahkan' : 'Arsipkan'}
          onClick={() => onArchive(note.id)} />
      </div>
    </div>
  );
}

export default NoteItem;
