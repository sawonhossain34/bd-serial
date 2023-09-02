

const HeaderItems = ({name,Icon}) => {
    return (
        <div className=" flex item-center gap-3 cursor-pointer text-[15px] font-bold hover:underline underline-offset-8 mb-3">
            <Icon />
            <h2 className="">{name}</h2>
        </div>
    );
};

export default HeaderItems;