"use client"

import { useState, useRef, useEffect } from 'react'
import { FaChevronDown, FaMapMarkerAlt } from 'react-icons/fa'

export default function BranchSelect({ branches, value, onChange, name = "branch" }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const selected = branches.find(b => b.name === value)

  function select(branchName) {
    onChange({ target: { name, value: branchName } })
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <input type="hidden" name={name} value={value} required />
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full px-4 py-3 rounded-lg border text-left flex items-center justify-between transition-colors text-sm ${
          open
            ? 'border-sage-600 ring-1 ring-sage-600'
            : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <span className={selected ? 'text-forest-900' : 'text-gray-400'}>
          {selected ? selected.name : 'Şube Seçin'}
        </span>
        <FaChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute z-50 mt-1.5 w-full bg-white rounded-xl border border-gray-100 shadow-lg overflow-hidden">
          {branches.map((b) => (
            <button
              key={b.name}
              type="button"
              onClick={() => select(b.name)}
              className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors text-sm ${
                value === b.name
                  ? 'bg-sage-50 text-sage-700'
                  : 'text-forest-900 hover:bg-gray-50'
              }`}
            >
              <FaMapMarkerAlt className="w-3.5 h-3.5 text-sage-500 shrink-0" />
              <span className="font-medium">{b.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
