type TokensGridProps = {
  tokens: Record<string, any>
  hasRamValue?: boolean
  printValue?: 'div' | 'span' | 'text' | undefined
}

export default function TokensGrid({
  tokens,
  hasRamValue = false,
  printValue = undefined,
}: TokensGridProps) {
  return (
    <table className="w-full text-white border-collapse">
      <thead className="bg-dark-200">
        <tr>
          <th className="py-3 px-4 text-left">Name</th>
          <th className="py-3 px-4 text-left">Value</th>
          {hasRamValue && <th className="py-3 px-4 text-left">Pixels</th>}
          {printValue && <th className="py-3 px-4 text-left"></th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          const valueFormatted =
            typeof value === 'string' ? value : value.join(', ')
          return (
            <tr key={key} className="even:bg-gray-400 rounded">
              <td className="py-3 px-4 text-left text-black">{key}</td>
              <td className="py-3 px-4 text-left text-black">
                {valueFormatted}
              </td>
              {hasRamValue && (
                <td className="py-3 px-4 text-left text-black">
                  {Number(value.replace('rem', '')) * 16}px
                </td>
              )}
              {printValue === 'div' && (
                <td className="py-3 px-4 text-left text-black">
                  <div
                    className="bg-blue-300"
                    style={{
                      width: value,
                    }}
                  >
                    &nbsp;
                  </div>
                </td>
              )}
              {printValue === 'span' && (
                <td className="py-3 px-4 text-left text-black">
                  <span
                    style={{
                      fontWeight: value,
                    }}
                  >
                    this is a text
                  </span>
                </td>
              )}
              {printValue === 'text' && (
                <td className="py-3 px-4 text-left text-black">
                  <span
                    style={{
                      fontSize: value,
                    }}
                  >
                    this is a text
                  </span>
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
