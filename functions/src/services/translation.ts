import { TranslationResult, TranslationRequest } from "../domains/Translation";
//import firestore from "../repositories/firestore";


export function translate(request: TranslationRequest) : TranslationResult  {
    
    if((/v[óoô]?c[êe]? experimentou/i).test(request.text)){
        return {
            requestedText: request,
            resultText: "tem pimentão".toUpperCase()
        }
    }

    if((/tem piment[ãaâ][óo]?[o]?\b/i).test(request.text)){
        return {
            requestedText: request,
            resultText: "você experimentou".toUpperCase()
        }
    }

    let words = request.text.split(" ");

    const resultText = words.map((word) => {
        
        let preprocessed = word.toUpperCase()

        if(preprocessed === 'SUA'){
            preprocessed = 'SEU'
        }else if(preprocessed === 'SEU'){
            preprocessed = 'SUA'
        }

        return preprocessed
                .replace("ÃO", "IÓN")
                .replace("R", "RR")
                .replace(/\b([a-zA-Z])\b/g, (match, letra) => {
                    return letra.length == 2 && letra.toLowerCase() !== "é" ? `l${letra}`: letra
                })
                .toUpperCase()
                

      }).join(" ")

    const result = {
        requestedText: request,
        resultText
    }

    //firestore.instance().collection("translations").add({ ...result, date: firestore.instance.Timestamp.fromDate(new Date())})

    return result
}