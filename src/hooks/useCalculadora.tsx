import { useState , useRef } from "react"

// Curso React-Native 
// Prof: Herrera, Fernando
// Chagaray, Alan
// alanandreschagaray@gmail.com

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('0')

    const ultimaOperacion = useRef<Operadores>()

    const clean =()=> {
        setNumero('0')
        setNumeroAnterior('0')
    }

    const positivoNegativo = ()=> {
        if(numero.includes('-')){
            setNumero(numero.replace('-',''))
        }else{
            setNumero('-' + numero)
        }
    }

    const armarNumero = (numeroNuevo :string) => {

        // No aceptar doble punto
        if(numero.includes('.') && numeroNuevo === '.') return;

        if(numero.startsWith('0') || numero.startsWith('-0')){
            
            // Punto decimal
            if(numeroNuevo === '.'){
                setNumero( numero + numeroNuevo );
                
            // Evaluar si es otro cero,y hay un punto
            }else if(numeroNuevo === '0' && numero.includes('.')){
                setNumero( numero + numeroNuevo )    
            
            // Evaluar si es diferenete de cero y no tiene un punto
            }else if(numeroNuevo !== '0' && !numero.includes('.')){
                setNumero( numeroNuevo )
            }
            // Evitar 0000.0
            else if(numeroNuevo === '0' && !numero.includes('.')){
            setNumero( numero )
            }else{
                setNumero( numero + numeroNuevo )
            }
        }else{
            setNumero( numero + numeroNuevo )
        }
    }

    const cambiarnNumPorAnterior = () => {
        if(numero.endsWith('.')){
            setNumeroAnterior( numero.slice(0, -1))
        }else{
            setNumeroAnterior(numero)
        }
        setNumero('0')
    }

    const btnSumar = () => {
        cambiarnNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }
    const btnRestar = () => {
        cambiarnNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }
    const btnDividir = () => {
        cambiarnNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }
    const btnMultiplicar = () => {
        cambiarnNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const calcular = ()=>{
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch(ultimaOperacion.current){
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;            
            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;            
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;            
            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;            
        }
        setNumeroAnterior('0');
    }

    const btnDelete = ()=>{
        let negativo = '';
        let numeroAux = numero;
        if(numero.includes('-')){
            negativo= '-';
            numeroAux = numero.substring(1);
        }

        if(numeroAux.length > 1){
            setNumero(negativo + numeroAux.slice(0, -1));
        }else{
            setNumero('0');
        }
    }


  return {
    numero,
    numeroAnterior,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    btnDelete,
    clean,
    positivoNegativo,
    armarNumero,
    calcular
  }
}
