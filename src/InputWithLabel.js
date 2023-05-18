
import React from "react";
   const InputWithLabel = ({
      value,
      handleTitleChange,
      isFocused,
      children
   }) =>{
      
   const inputRef = React.useRef();
   
   React.useEffect(() => {
      if (isFocused && inputRef.current) {
      inputRef.current.focus();
      }
      }, [isFocused]);

   return(
    <>
        <label htmlFor="">{children}</label>
        <br/>
        <input type="text" value={value} ref={inputRef}  onChange={handleTitleChange} autoFocus />
    </>
   );
}
export default InputWithLabel;