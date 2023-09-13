import { translate } from '../../src/services/translation'; 
describe('translate', () => {
  it('should translate "você experimentou" para "tem pimentão"', () => {
    const request = { text: 'você experimentou' };
    const result = translate(request);
    expect(result.resultText).toBe(('tem pimentão').toUpperCase());
  });


  it('should translate "tem pimentão"', () => {
    const request = { text: 'tem pimentão' };
    const result = translate(request);
    expect(result.resultText).toBe(('você experimentou').toUpperCase());
  });

  it('should translate "você é a vergonha da profissão"', () => {
    const request = { text: 'você é a vergonha da profissão' };
    const result = translate(request);
    expect(result.resultText).toBe(('você é a verrgonha da prrofissión').toUpperCase());
  });

  it('should translate "mexe sua bunda"', () => {
    const request = { text: 'mexe sua bunda' };
    const result = translate(request);
    
    expect(result.resultText).toBe(('mexe seu bunda').toUpperCase());
  });
});
