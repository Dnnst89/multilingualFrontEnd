const DefaultButton = ({ expertsIn }) => {
    console.log('expertsIn', expertsIn);
    return (
        <button
            className={`py-2 px-4 text-left rounded-full flex items-center justify-between w-full max-w-[300px] 
            ${
                expertsIn === 'Industry experts'
                    ? 'bg-[#BE113C] text-white'
                    : 'bg-slate-300 text-dark'
            }`}
        >
            <span className="text-black font-bold">{'<'}</span>
            <span>{expertsIn}</span>
        </button>
    );
};
export default DefaultButton;
