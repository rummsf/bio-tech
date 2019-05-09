import React, { useEffect } from 'react';
import * as d3 from 'd3';

import Colors from './Colors';

function GraphView(props) {
  const { data, selectedReactors } = props;
  const reactorsToShow = new Set(
    Array.from(selectedReactors).map(num => 'reactor-' + num),
  );
  const getExtents = () => {
    let minDate = Infinity;
    let maxDate = -Infinity;
    Object.keys(data).forEach(reactor => {
      if (!reactorsToShow.has(reactor)) {
        return;
      }
      props.data[reactor].forEach(sample => {
        if (sample.timestamp < minDate) {
          minDate = sample.timestamp;
        }

        if (sample.timestamp > maxDate) {
          maxDate = sample.timestamp;
        }
      });
    });

    return {
      dateExtent: [minDate, maxDate],
      valueExtent: [-70, 70],
    };
  };

  useEffect(() => {
    const svg = d3.select('#chart');
    const width = 740;
    const height = 600;

    svg.selectAll('*').remove();
    const margin = { top: 50, right: 30, bottom: 30, left: 40 };
    const extents = getExtents();
    const line = d3
      .line()
      .defined(d => !!d.value)
      .x(d => x(d.timestamp))
      .y(d => y(d.value));

    const x = d3
      .scaleTime()
      .domain(extents.dateExtent)
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain(extents.valueExtent)
      .nice()
      .range([height - margin.bottom, margin.top]);

    const reactorHeadings = Object.keys(data);
    reactorHeadings.forEach(reactor => {
      if (!reactorsToShow.has(reactor)) {
        return;
      }
      const rd = data[reactor];
      svg
        .append('path')
        .datum(rd)
        .attr('fill', 'none')
        .attr('stroke', Colors[reactor])
        .attr('stroke-width', 1.5)
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('d', line);
    });

    svg.append('g').call(g =>
      g.attr('transform', `translate(0,${height - margin.bottom + 5})`).call(
        d3
          .axisBottom(x)
          .ticks(width / 200)
          .tickSizeOuter(10)
          .tickFormat(d3.timeFormat('%H:%M:%S:%L')),
      ),
    );

    svg
      .append('g')
      .call(g =>
        g
          .attr('transform', `translate(${margin.left - 5},0)`)
          .call(d3.axisLeft(y).ticks(8, '.0f')),
      );
  });

  return (
    <div>
      <svg id="chart" width="740" height="600" />
    </div>
  );
}

export default GraphView;
