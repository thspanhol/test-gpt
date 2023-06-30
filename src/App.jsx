const App = () => {


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

