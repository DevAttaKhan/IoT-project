import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { Fragment, useMemo, useState } from "react";

type Option = {
  id: number;
  name: string;
};

type Props = {
  options: Option[];
  placeholder: string;
};

export const SearchDropdown = ({ options, placeholder }: Props) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<{
    id: number;
    name: string;
  }>(options[1]);

  const filteredPeople = useMemo(() => {
    return query === ""
      ? options
      : options.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });
  }, []);

  return (
    <Combobox
      value={selected}
      onChange={(value: Option) => setSelected(value)}
      as="div"
      className="relative"
    >
      <ComboboxInput
        className="w-full mb-5 border px-6 py-3 rounded outline-bluebonnet "
        displayValue={(option: Option) => option?.name}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
      />

      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => setQuery("")}
      >
        <ComboboxOptions className="absolute top-14 w-full px-3 py-3 bg-white mb-5 border z-40 rounded shadow">
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              className="px-3 rounded cursor-pointer py-2 hover:bg-gray-100 data-[selected]:bg-gray-100 transition "
            >
              {person.name}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Transition>
    </Combobox>
  );
};
