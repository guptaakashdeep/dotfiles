//'99 - Meta/templater-scripts/quotes.json'
module.exports = async (tp) => {
    try {
      console.log('Starting quote fetch...');
  
      const file = app.vault.getAbstractFileByPath('99 - Meta/templater-scripts/quotes.json');
      if (!file) {
        console.log('Could not find quotes.json in Scripts folder.');
        throw new Error('quotes.json not found in the Scripts folder.');
      }
  
      console.log('File found. Reading content...');
  
      const quotesData = await app.vault.read(file);
      console.log('File content:', quotesData);
  
      const quotes = JSON.parse(quotesData);
      console.log('Parsed quotes:', quotes);
  
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const { quote, author } = quotes[randomIndex];
      console.log(`Selected Quote: ${quote} - ${author}`);
  
      // Just return the formatted quote
      return `> > [!quote] ${quote}\n> > &mdash; <cite>${author}</cite>`;
    } catch (error) {
      console.error('Error fetching quote:', error);
      return '> Could not fetch a quote at the moment.\n> &mdash; <cite>System</cite>';
    }
  };
  