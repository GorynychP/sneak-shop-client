// Форматируем дату
export function formatData(date: string): string {
    return new Intl.DateTimeFormat('ru-Ru', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(new Date(date));
}
