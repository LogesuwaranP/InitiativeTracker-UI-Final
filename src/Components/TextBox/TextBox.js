import React from "react";

export default  function TextBox({mxhight,mihight,holder,value, setValue,dis}) {
    //   var MIN_TEXTAREA_HEIGHT = 32;
      const MIN_TEXTAREA_HEIGHT = mihight?mihight:42;
    
      const textareaRef = React.useRef(null);
      // const [value, setValue] = React.useState("");
      const onChange = (event) => setValue(event.target.value);
      // console.log(summary);
    
      React.useLayoutEffect(() => {
        // Reset height - important to shrink on delete
        textareaRef.current.style.height = `${MIN_TEXTAREA_HEIGHT}px`;
    
        
        
        // Set height
        textareaRef.current.style.height = `${Math.max(        
          textareaRef.current.scrollHeight,
          MIN_TEXTAREA_HEIGHT,
        )}px`;

        // console.log(textareaRef.current.style.height);
    
        if(textareaRef.current.scrollHeight>MIN_TEXTAREA_HEIGHT&&textareaRef.current.scrollHeight>=mxhight)
        {
            textareaRef.current.style.height = `${mxhight}px`;
            return;
        }
        
      }, [value]);
    
      return (
        <textarea
          disabled={dis}
          onChange={onChange}
          ref={textareaRef}
          style={{
            minHeight: MIN_TEXTAREA_HEIGHT,
            resize: "none",
            overflowY:'auto'
          }}
          placeholder={holder}
          value={value}
        />
      );
    }