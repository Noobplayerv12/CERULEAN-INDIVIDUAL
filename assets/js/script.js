const { createApp } = Vue

  createApp({
    data() {
      return {
        tarefaFazer:"",
        tarefas: [],
      }
    },
    methods: {
        criarTarefa(){
            if(this.tarefaFazer != ""){
                if(!this.tarefas.includes(this.tarefaFazer)){
                    this.tarefas.unshift(this.tarefaFazer)
                    this.tarefaFazer = ""
                } else {
                    this.tarefaFazer = ""
                }
            }
        }
    },
  }).mount('#app')