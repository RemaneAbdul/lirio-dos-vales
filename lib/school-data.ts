export type SchoolPhoto = {
  src: string
  alt: string
  caption: string
  category: 'Aprendizagem' | 'Actividades' | 'Eventos'
}

export const schoolPhotos: SchoolPhoto[] = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/741409320_1564561102036969_3585081895203626441_n-3QRFqofPg2dsTa2I3yjGQUUHXwoDlc.jpg',
    alt: 'Alunos da escola seguram pequenas bandeiras durante uma celebração cultural.',
    caption: 'Uma celebração de culturas e comunidades',
    category: 'Eventos',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/740945065_1564561095370303_4470060986768235660_n-eHtecY5FXzGsjlqmosd43sR3lbbFKy.jpg',
    alt: 'Aluno participa numa apresentação cultural usando traje tradicional e coroa de papel.',
    caption: 'Aprender sobre culturas através da participação',
    category: 'Eventos',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/791014436_1611151657377913_3557011320209980648_n-otICQYwTWEgPdTjeuDwlX9J8OpxgiS.jpg',
    alt: 'Alunos acompanham uma aula numa sala de aula iluminada pelo sol.',
    caption: 'Curiosidade e aprendizagem na sala de aula',
    category: 'Aprendizagem',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/839453207_1644103517416060_2701789858115329838_n-pp4Ao4QeuylouJ9rwsdePJYsCEPctL.jpg',
    alt: 'Grupo de alunos sorri reunido no recreio à sombra de uma grande árvore.',
    caption: 'Uma comunidade que cresce junta',
    category: 'Eventos',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/481119686_1172929847866765_5738121386039966699_n-7KOHV9vqGTZGVMVMgerLIZ8KLhr42Z.jpg',
    alt: 'Aluna pinta um desenho numa actividade de expressão artística em sala de aula.',
    caption: 'Criatividade e expressão artística',
    category: 'Aprendizagem',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/481176174_1173519301141153_1896128088612634521_n-v4kpWSUKPhdSBIAIMqEyAe0VPYMblW.jpg',
    alt: 'Alunos treinam taekwondo numa sala preparada para a actividade.',
    caption: 'Taekwondo: movimento, disciplina e confiança',
    category: 'Actividades',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/481211977_1171582298001520_7925386750021697164_n-xT5ppow1AGiRiSwkWIpiYBQey67Pbh.jpg',
    alt: 'Dois representantes participam na cerimónia de inauguração de uma porta, com uma fita verde.',
    caption: 'Um momento especial para a comunidade escolar',
    category: 'Eventos',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/481309714_1171582544668162_9109418739939012407_n-ChmkmVZg5j9SBrXIv4PBIIcbaPfZih.jpg',
    alt: 'Convidados e membros da comunidade chegam à escola para uma ocasião especial.',
    caption: 'A escola e a sua comunidade',
    category: 'Eventos',
  },
]
