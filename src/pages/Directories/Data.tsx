type cardProps = {
    createdAt?: string
    email?: string
    fullName?: string
    isAdmin?: boolean
    jurisdiction?: 'state' | 'federal' | 'local'
    password?: string
    phone?: string
    pic?: string
    position?: string
    stateOfOrigin?: string
    updatedAt?: string
    __t?: string
    _id?: string
}

const card: cardProps[] = []

export type { cardProps }
export default card