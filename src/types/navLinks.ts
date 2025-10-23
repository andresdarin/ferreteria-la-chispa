export type NavLink = {
    href: string
    label: string
    cta?: boolean
}

export const NAV_LINKS: NavLink[] = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#productos', label: 'Productos' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#contacto', label: 'Contacto' },
    { href: '#comprar', label: 'Comprar', cta: true },
]