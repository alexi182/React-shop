import {autobind} from 'core-decorators';

const tabsItems = [
   {
      title: 'Дерево',
      text: 'Деревья деревянные',
      treeItems: [
         {
            title: 'Деревянные дела №1',
            treeItems: [
               {
                  title: 'Отпилить берёзу'
               },
               {
                  title: 'Снять кору'
               },
               {
                  title: 'Напильником сделать буратино',
                  treeItems: [
                     {
                        title: 'Отдать буратино в школу Барабаса'
                     },
                     {
                        title: 'Порвать холст на очаге его носом'
                     },
                  ]
               }
            ]
         },
      ]
   },
   {
      title: 'Дела',
      text: 'Дела все не переделать',
      treeItems: [
         {
            title: 'Дела не очень важные',
            treeItems: [
               {
                  title: 'Отпилить берёзу'
               },
               {
                  title: 'Снять кору'
               },
               {
                  title: 'Напильником сделать буратино',
                  treeItems: []
               }
            ]
         },
         {
            title: 'Дела очень важные'
         }
      ],
   },
   {
      title: 'Поручения',
      text: 'Сюда лучше не заглядывать',
      treeItems: [],
   },
];

@autobind()
class Tree extends React.Component {
   state = {
      expanded: false
   };

   toggleExpanded = () => {
      this.setState({
         expanded: !this.state.expanded
      });
   };

   renderItem = (item, key) => {
      return (
          <li key={key}>
				<span	onClick={this.toggleExpanded}>
					{item.title}
				</span>
             {
                this.state.expanded && item.treeItems &&
                <Tree treeItems={item.treeItems} />
             }
          </li>
      );
   };

   render() {
      const { treeItems } = this.props;
      return (
          <div>
             <ul>
                { treeItems.map(this.renderItem) }
             </ul>
          </div>
      );
   }
}


class Tabs extends React.Component {
   state = {
      selectedIndex: 0
   };

   renderTab = (selectedIndex) => (item, key) => {
      return (
          <li className={`tabItem ${selectedIndex === key ? 'active' : ''}` } key={key}
              onClick={() => {
                 this.setState({
                    selectedIndex: key
                 });
              }} >
             {item.title}
          </li>
      );
   };

   render() {
      const { tabsItems } = this.props;
      const { selectedIndex } = this.state;

      return (
          <div className="Tabs">
             <ul className="tabsList">
                {
                   tabsItems.map(this.renderTab(selectedIndex))
                }
             </ul>
             <div className="tabPanel">
                {
                   tabsItems &&
                   tabsItems[selectedIndex].text
                }
                {
                   <Tree treeItems={tabsItems[selectedIndex].treeItems} />
                }
             </div>
          </div>
      );
   }
};

export default class App extends React.Component {
   render() {
      return (
          <div>
             <Tabs tabsItems={tabsItems} />
          </div>
      );
   }
};
