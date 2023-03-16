import ImageUpload from '../components/storyCreate/ImageUpload'
import GenreList from '../components/storyCreate/genreList'
export default function storyCreatePage() {
  return (
    <div style={{ textAlign: 'center' }}>
      <ImageUpload></ImageUpload>
      <GenreList></GenreList>
    </div>
  )
}
