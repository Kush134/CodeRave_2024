import LoadingImage from '@/public/images/loading_sign.png'
import Image from 'next/image'

const Loading = () => {
  return (
    <Image src={LoadingImage} alt="loading" />
  )
}

export default Loading