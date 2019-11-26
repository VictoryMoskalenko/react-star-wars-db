import React from 'react';
import { Layout, Avatar, Menu, Icon, Breadcrumb} from 'antd';
import './App.css';
import { Batsmen, Bowler } from './Cricketer';

import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Tree } from 'antd';


const { TreeNode } = Tree;

// const { SubMenu } = Menu;

// const { Title } = Typography;

const { Header, Footer, Sider, Content } = Layout;

function App() {
  let bestBatsmen = new Batsmen('S.P.D. Smith', 'AUS', 6973);
  let bestBowler = new Bowler('Pat Cummins', 'AUS', 123);

  return (
    <div className="App">
      <Layout>
        <Header style={{padding: 10}}>
          <Avatar style={{float: 'right'}} src="./lion-icon.png" />
          <Title style={{color: 'white'}} level={3}>Site Name</Title>
        </Header>
          <Layout>
            <Sider>
              <Menu
              defaultSelectedKeys={["Dashboard"]}
              mode="inline">

                <Menu.Item key="Dashboard">
                  Dashboard
                </Menu.Item>

                <SubMenu 
                title={
                  <span>
                    <Icon type="mail" />
                    <span>About Us</span>
                  </span>
                }>

                  <Menu.ItemGroup key="AboutUs" title="Country 1">
                    <Menu.Item key="location1">Location 1</Menu.Item>
                    <Menu.Item key="location2">Location 2</Menu.Item>
                  </Menu.ItemGroup>

                </SubMenu>
              </Menu>
            </Sider>
          <Layout>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 440 }}>

              <Tree key='0' showLine defaultExpandedKeys={['0-0-0']}>

                <TreeNode title={bestBatsmen.getName()} key='0-0-0'>
                  <TreeNode title = {'Team -' + bestBatsmen.getTeamName()} key='0-0-0-1' isLeaf />
                  <TreeNode title = {'Runs -' + bestBatsmen.getRuns()} key='0-0-0-2' isLeaf />
                </TreeNode>

                <TreeNode title={bestBowler.getName()} key='0-0-1'>
                  <TreeNode title = {'Team -' + bestBowler.getTeamName()} key='0-0-1-1' />
                  <TreeNode title = {'Wickets -' + bestBowler.getWickets()} key='0-0-1-2' />
                </TreeNode>

              </Tree>
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            Ant Design Layout example Created by example
          </Footer>

          </Layout>
        </Layout>
    </Layout>
    </div>
  );
}

export default App;
