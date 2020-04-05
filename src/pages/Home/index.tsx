import React, { useState, useEffect } from 'react';
import { AddTool, Tool, Loading } from '../../components';
import { getTools } from '../../api/tools';

import {
  Container,
  Wrapper,
  Input,
  SearchBar,
  Content,
  Checkbox,
} from './styles';

export default function Home() {
  const [tools, setTools] = useState<Global.ITool[]>([]);
  const [search, setSearch] = useState<string>('');
  const [searchTag, setSearchTag] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  async function getData(): Promise<void> {
    const { data } = await getTools({ search, searchTag });
    setTools(data);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getData().then(() => setLoading(false));
    }, 1500);
  }, [searchTag, search]); //eslint-disable-line

  return (
    <Container>
      <h1>VUTTR</h1>
      <h3>Very Useful Tools to Remember</h3>
      <Wrapper>
        <SearchBar>
          <Input onChange={(e) => setSearch(e.target.value)} />
          <Checkbox
            checked={searchTag}
            onChange={() => setSearchTag(!searchTag)}
          >
            search only in tags
          </Checkbox>
        </SearchBar>
        <AddTool refetch={getData} />
      </Wrapper>
      <Content>
        {loading && <Loading />}
        {!loading &&
          tools.map((tool) => (
            <Tool key={tool.id} tool={tool} refetch={getData} />
          ))}
        {!loading && tools.length === 0 && <h1>No Results Match!</h1>}
      </Content>
    </Container>
  );
}
