import type { NextPage } from 'next'
import Lista from '../src/components/Lista/Lista'
import { Box } from '@mui/material'
import { Professor } from '../src/@types/professor'


const Home: NextPage = () => {
  const professores: Professor[] = [
   {
    id: 1,
    nome: "Professor 1",
    foto: "https://github.com/leonardosantos10.png",
    descricao: "Descrição do Professor 1",
    valor_hora: 100
   },
    {
    id: 2,
    nome: "Professor 2",
    foto: "https://github.com/leonardosantos10.png",
    descricao: "Descrição do Professor 2",
    valor_hora: 150
   },
    {
    id: 3,
    nome: "Professor 3",
    foto: "https://github.com/leonardosantos10.png",
    descricao: "Descrição do Professor 3",
    valor_hora: 180
   },
    {
    id: 4,
    nome: "Professor 4",
    foto: "https://github.com/leonardosantos10.png",
    descricao: "Descrição do Professor 4",
    valor_hora: 200
   }
  ]

   return  (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={professores}></Lista>
    </Box>
   )
}

export default Home 

