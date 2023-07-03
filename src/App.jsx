const App = () => {

  /* A partir de março de 2023, a OpenAI introduziu mudanças em sua política de preços e acesso à API do ChatGPT. Agora, o acesso à API do ChatGPT é pago e não está mais disponível gratuitamente.

Portanto, para obter uma chave de acesso e usar a API do ChatGPT, é necessário ter uma conta paga na OpenAI ou estar dentro dos limites de uso da versão gratuita oferecida pela OpenAI. */


  const sendQuestion = async () => {
    const KEY = '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';
    let question = 'explique de forma resumida o que é o sol';
    let result = 'teste';
    await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + KEY,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: question,
        max_tokens: 2048, // tamanho da resposta
        temperature: 0.5, // criatividade na resposta
      }),
    })
    console.log('chamou');
/*      .then((response) => response.json())
    .then((json) => {
      if (json.error?.message) {
        result = json.error.message;
      } else if (json.choices?.[0].text) {
        let text = json.choices[0].text || 'Sem resposta';
        result = text;
        console.log(result);
      }
    })
    .catch((error) => console.error('Error', error))  */
  }


  return (
    <>
      <h1>Teste</h1>
      <button onClick={sendQuestion}>Chama</button>
    </>
  );
}

export default App;

