export default function SkipButton({text, onNext}){
    return(
        <>
         <div className="pt-6">
            <button className="text-sm text-gray-300 hover:text-white underline transition" onClick={onNext}>
                {text}
            </button>
         </div>
        </>
    );
}