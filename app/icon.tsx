import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default async function Icon() {
  try {
    // Read the image file from the local filesystem
    const imagePath = join(process.cwd(), 'app', 'favicon-source.png')
    const imageBuffer = await readFile(imagePath)
    
    // Use base64 string for embedding in ImageResponse
    const base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <img
            src={base64Image}
            width="32"
            height="32"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </div>
      ),
      {
        ...size,
      }
    )
  } catch (error) {
    console.error('Error generating round icon:', error)
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: '#0a0a0a',
            borderRadius: '50%',
          }}
        />
      ),
      {
        ...size,
      }
    )
  }
}
