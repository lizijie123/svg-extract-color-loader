/**
 * 测试svg
 */
const testSvg = `
  <?xml version="1.0" encoding="UTF-8"?>
  <svg width="100%" height="100%" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Group 15</title>
    <g id="product-detail" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="product_detail-" transform="translate(-339.000000, -1297.000000)">
        <g id="Group-15" transform="translate(339.000000, 1297.000000)">
          <rect id="Rectangle" transform="translate(8.000000, 8.000000) rotate(-360.000000) translate(-8.000000, -8.000000) " x="2.14251292e-15" y="1.77635684e-15" width="16" height="16"></rect>
          <line x1="12.2426407" y1="3.75735931" x2="3.75735931" y2="12.2426407" id="Line-3" stroke="#000000" stroke-width="2" stroke-linecap="square" transform="translate(8.000000, 8.000000) rotate(-45.000000) translate(-8.000000, -8.000000) "></line>
          <line x1="3.75735931" y1="3.75735931" x2="12.2426407" y2="12.2426407" id="Line-3" stroke="#000000" stroke-width="2" stroke-linecap="square" transform="translate(8.000000, 8.000000) scale(-1, 1) rotate(-45.000000) translate(-8.000000, -8.000000) "></line>
        </g>
      </g>
    </g>
  </svg>
`

/**
 * svg目标编译结果(stroke的值由 #000000 变成 var(--color, #000000))
 */
const targetSvg = `
  <?xml version="1.0" encoding="UTF-8"?>
  <svg width="100%" height="100%" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Group 15</title>
    <g id="product-detail" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="product_detail-" transform="translate(-339.000000, -1297.000000)">
        <g id="Group-15" transform="translate(339.000000, 1297.000000)">
          <rect id="Rectangle" transform="translate(8.000000, 8.000000) rotate(-360.000000) translate(-8.000000, -8.000000) " x="2.14251292e-15" y="1.77635684e-15" width="16" height="16"></rect>
          <line x1="12.2426407" y1="3.75735931" x2="3.75735931" y2="12.2426407" id="Line-3" stroke="var(--color, #000000)" stroke-width="2" stroke-linecap="square" transform="translate(8.000000, 8.000000) rotate(-45.000000) translate(-8.000000, -8.000000) "></line>
          <line x1="3.75735931" y1="3.75735931" x2="12.2426407" y2="12.2426407" id="Line-3" stroke="var(--color, #000000)" stroke-width="2" stroke-linecap="square" transform="translate(8.000000, 8.000000) scale(-1, 1) rotate(-45.000000) translate(-8.000000, -8.000000) "></line>
        </g>
      </g>
    </g>
  </svg>
`

module.exports = {
  testSvg,
  targetSvg,
}