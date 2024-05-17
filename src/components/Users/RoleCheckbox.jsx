import Input from "../inputs/input"

const RoleCheckbox = ({ menuItem, control, errors }) => {
    return (
        <>
            <Input
                labelStyle={`text-neutral-400 text-sm font-light leading-tight my-0`}
                label={menuItem.label}
                className={`text-left w-6 accent-blue-900 h-6`}
                type="checkbox"
                control={control}
                errors={errors}
                value={menuItem.label.toLowerCase().replace(/\s/g, "")}
                name={menuItem.label.toLowerCase().replace(/\s/g, "")}
            />
            {menuItem.submenu && menuItem.submenu.length > 0 &&
                (
                    menuItem.submenu.map((subMenuItem) => (
                        <Input
                            key={subMenuItem.label}
                            labelStyle={`text-neutral-400 text-sm font-light leading-tight my-0`}
                            label={subMenuItem.label}
                            className={`text-left w-6 accent-blue-900 h-6 ml-10 mt-3`}
                            type="checkbox"
                            control={control}
                            errors={errors}
                            value={subMenuItem.label.toLowerCase().replace(/\s/g, "")}
                            name={subMenuItem.label.toLowerCase().replace(/\s/g, "")}
                        />
                    ))
                )
            }
        </>
    )
}

export default RoleCheckbox