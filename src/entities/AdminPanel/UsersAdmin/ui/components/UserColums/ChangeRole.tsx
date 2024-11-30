import { memo, useState } from 'react';
import clsx from 'clsx';
import cls from './ChangeRole.module.scss';
import { Pencil } from 'lucide-react';
import { ListBox } from '@/shared/ui/Popups';

interface ChangeRoleProps {
    className?: string;
}

export const ChangeRole = memo(({ className }: ChangeRoleProps) => {
    const [isOpenList, setIsOpenList] = useState(false);
    return (
        <div className={clsx(cls.ChangeRole, [className])}>
            <div className="center gap-min" onClick={() => setIsOpenList(!isOpenList)}>
                <Pencil />
                Сменить роль
            </div>
            {isOpenList && (
                <ListBox
                    className={clsx(cls.ListBox, {})}
                    items={[
                        { value: 'ADMIN', content: 'Aдмин' },
                        { value: 'MANAGER', content: 'Менеджер' },
                        { value: 'USER', content: 'Пользователь' },
                    ]}
                    // value={field.value}
                    // onChange={field.onChange}
                    defaultValue="Выберите роль"
                    direction="bottom left"
                    // addonRight={<ChevronDown />}
                />
            )}
        </div>
    );
});
