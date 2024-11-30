import { Button } from '@/shared/ui/Button';
import { CheckboxItem } from '@/shared/ui/Checkbox';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { useState } from 'react';
import cls from './MultSelect.module.scss';

const roles = [
    { id: 1, name: 'Администратор', enabled: true },
    { id: 2, name: 'Модератор', enabled: true },
    { id: 3, name: 'Пользователь', enabled: true },
];

export function MultSelect() {
    // const [roles, setRoles] = useState([
    //     { id: 1, name: 'Администратор', enabled: true },
    //     { id: 2, name: 'Модератор', enabled: true },
    //     { id: 3, name: 'Пользователь', enabled: true },
    // ]);
    const [selectedPeople, setSelectedPeople] = useState([roles[0]]);
    // const [selectedRole, setSelectedRole] = useState([roles[0]]);

    return (
        <Listbox
            className={cls.MultSelect}
            as={'div'}
            value={selectedPeople}
            onChange={setSelectedPeople}
            multiple
        >
            <ListboxButton theme="accent_button" as={Button} className="column">
                {selectedPeople.map((role) => (
                    <div key={role.id}>{role.name}</div>
                ))}
            </ListboxButton>
            <ListboxOptions className={cls.options} as={'ul'} anchor="bottom end">
                {roles.map((role) => (
                    <ListboxOption as={'li'} key={role.id} value={role} className="flex gap-min">
                        <CheckboxItem
                            enabled={role.enabled}
                            setEnabled={() => {
                                role.enabled = !role.enabled;
                            }}
                        />

                        {role.name}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );
}
