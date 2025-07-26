export default function SkipButton({text, onNext}){
    return(
        <>
            <button className="text-sm text-gray-300 hover:text-white underline transition" onClick={onNext}>
                {text}
            </button>
        </>
    );
}