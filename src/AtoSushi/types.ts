class Meal {
    name: string
    description: string
    price: string
    isVege: Boolean

    constructor(
        name: string,
        description: string = '',
        price: string,
        isVege: Boolean = false
    ) {
        this.name = name
        this.description = description
        this.price = price
        this.isVege = isVege

        Object.freeze(this)
    }
}

class MenuSushi {
    category: string
    subcategory: string
    setType: string
    meal: Array<Meal>
    subdescription: string

    constructor(
        category: string,
        subcategory: string = '',
        meal: Array<Meal>,
        setType: string = '',
        subdescription: string = ''
    ) {
        this.category = category
        this.subcategory = subcategory
        this.meal = meal
        this.setType = setType
        this.subdescription = subdescription

        Object.freeze(this)
    }
}

export { MenuSushi, Meal }
