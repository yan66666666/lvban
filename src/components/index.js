import footer from "./footer"
import header from "./header"
import header2 from "./header2"
import mybutton from "./button"


let install = function(Vue){
	Vue.component("my-footer",footer)
	Vue.component("my-header",header)
	Vue.component("my-header2",header2)
	Vue.component("my-button",mybutton)
	
}

export default install