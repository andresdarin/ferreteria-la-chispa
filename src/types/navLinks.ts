export type NavLink = {
    href: string
    label: string
    cta?: boolean
}

export const NAV_LINKS: NavLink[] = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#ferreteria', label: 'Ferretería' },
    { href: '#pintureria', label: 'Pinturería' },
    { href: '#contacto', label: 'Contacto' }]