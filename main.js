const app = new Vue(
    {
        el: '#app',
        data: {
            
            mailCasuali: [],
           
        },

        mounted() {

           
            
            /* genero dei Mail casuali*/
            for(let i=0;i<10;i++){

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((rispostaDelServer) => {
                    this.mailCasuali.push(rispostaDelServer.data.response);
                    
                    console.log(this.mailCasuali)
                });
            }

        }
    }
)