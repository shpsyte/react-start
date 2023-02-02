import { getContrast } from 'polished'

import colors from '@/styles/tokens/colors'

function getColorContrast(color: string) {
  return getContrast('#fff', color) < 3.5 ? '#000' : '#fff'
}

export default function ColorsGrid() {
  const colorsArray = Object.entries(colors).map(([key, value]) => {
    return {
      name: key,
      value,
    }
  })

  const colorsToRemove = ['current', 'transparent']
  const printColors = (name: string, value: any) => {
    if (typeof value === 'string') {
      const contrastColor = getColorContrast(value)
      return (
        <div
          key={name}
          className="flex h-16 items-center justify-between border"
        >
          <div
            key={name}
            className="text-lg w-full h-full flex items-end justify-between"
            style={{
              backgroundColor: value as string,
            }}
          >
            <div className="flex gap-0 w-full items-center justify-between">
              <span
                className="text-sm font-normal"
                style={{
                  color: contrastColor,
                }}
              >
                bg-{name}
              </span>
              <span
                className="text-sm font-normal "
                style={{
                  color: contrastColor,
                }}
              >
                {value as string}
              </span>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div key={name} className="flex h-16 gap-1 items-center justify-start ">
        {Object.entries(value).map(([key, value]) => {
          // if the values starts if rgb get the #hex value in the string
          const i = String(value).indexOf('#')
          const originalColor = String(value).includes('/ <alpha-value>')
            ? String(value).slice(i, i + 7)
            : String(value)
          const contrastColor = getColorContrast(originalColor)

          return (
            <div
              key={key}
              className="text-lg w-full h-full flex items-end justify-between "
              style={{
                backgroundColor: originalColor as string,
              }}
            >
              <div className="flex gap-0 items-center justify-between w-full">
                <span
                  className="text-sm font-normal "
                  style={{
                    color: contrastColor,
                  }}
                >
                  bg-{name}-{key}
                </span>
                <span
                  className="text-sm"
                  style={{
                    color: contrastColor,
                  }}
                >
                  {originalColor}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-4">
      {colorsArray
        .filter((a) => !colorsToRemove.includes(a.name))
        .map(({ name, value }) => {
          return (
            <div
              key={name}
              className="grid grid-cols-[50px_1fr] h-16 gap-8 items-center justify-start"
            >
              <span className="text-lg flex items-start justify-end font-medium text-dark-300">
                {name}
              </span>

              {printColors(name, value)}
            </div>
          )
        })}
    </div>
  )
}
