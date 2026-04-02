// ? NotesList.jsx
import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, onDelete, onArchive, dataTestId = 'notes-list' }) {
  // TODO [Basic] validasi notes agar tidak kosong.
  const hasNotes = notes && notes.length > 0; // update dengan nilai yang sesuai

  if (!hasNotes) {
    return (
      <div className="notes-list" data-testid={dataTestId}>
        {/* TODO [Basic] tampilkan pesan kosong yang informatif ketika tidak ada catatan. */}
        <p
          className="notes-list__empty-message"
          data-testid={`${dataTestId}-empty`}
        >Yey Catatan Tidak ada</p>
      </div>
    );
  };

  // Nah disini kita mengelompokannya ges hehew
  // A. Mengelompokkan array notes menjadi sebuah Object berdasarkan "Bulan-Tahun"
  const groupedNotes = notes.reduce((acc, note) => {
    // Ambil tanggal dari catatan
    const date = new Date(note.createdAt);

    // Format menjadi "Bulan Tahun" (Contoh: "Maret 2026")
    const monthYear = date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });

    // Jika kelompok bulan ini belum ada di object, buat array kosong
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    // Masukkan catatan ke dalam kelompok yang sesuai
    acc[monthYear].push(note);

    return acc;
  }, {});

  return (
    <div className="notes-list" data-testid={dataTestId}>
      {/* TODO [Basic] gunakan array.map untuk merender NoteItem untuk setiap catatan. */}
      {/* TODO [Skilled] ekstrak tombol aksi menjadi komponen reusable agar dipakai NoteItem. */}
      {/* TODO [Advanced] kelompokkan catatan per bulan-tahun dan render tiap grup dalam <section className="notes-group">. */}
      {/* Oke Disini kita beresin ya ges yah */}
      {Object.entries(groupedNotes).map(([groupKeyNote, groupValueNotes]) => (

        // ? Aturan Suci: Format elemen sesuai persyaratan Advanced Dicoding
        <section key={groupKeyNote} data-testid={`${groupKeyNote}-group`} className="notes-group">

          {/* Header Grup */}
          <h3>{groupKeyNote}</h3>

          {/* Penghitung Item */}
          <span data-testid={`${groupKeyNote}-group-count`}>{groupValueNotes.length} catatan</span>

          {/* Render Item Catatan di dalam grup ini */}
          {groupValueNotes.map((note) => (
            <NoteItem key={note.id} note={note} onArchive={onArchive} onDelete={onDelete} />
          ))}

        </section>
      ))}
    </div>
  );
}

export default NotesList;
