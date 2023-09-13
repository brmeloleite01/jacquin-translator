export type TranslationRequest = { 
    text: string
}

export type TranslationResult = {
    requestedText: TranslationRequest
    resultText: string
}