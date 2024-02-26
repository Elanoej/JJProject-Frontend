function Home (){
    
    const saudacao = saudacoes();

    return (
        <div>
            <h1>Home</h1>
            <h2>{saudacao}!</h2>
        </div>
    )
}

function saudacoes():string {
    let date = (Number) (new Date().toLocaleTimeString().split(':')[0]);
    if(date >= 6 && date <= 12){
        return 'Bom dia'
    }
    if(date > 12 && date <= 18){
        return 'Boa tarde'
    } else{
        return 'Boa noite'
    }
}

export default Home