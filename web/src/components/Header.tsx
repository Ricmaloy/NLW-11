import { Plus } from 'phosphor-react';

import logoImg from '../assets/logo.svg';

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex justify-between items-center">
      <img src={logoImg} alt="habits" />

      <button
        type="button"
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition"
      >
        <Plus className="text-violet-500" size={20} />
        Novo hábito
      </button>
    </div>
  );
}
