




export default function formatDate(dateString: string): string {
    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'short' }).format(new Date(dateString))
};