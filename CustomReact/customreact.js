function mainContainer(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target'. reactElement.proops.target)

    // container.appendChild(domElement)
} 

const reactElement = {
    type: 'a',
    props:{
        href:"https://google.com",
        targe: '_blank'
    },

    children: 'click me to visit google'
}

const mainContainer = document.getElementById('root')

customReminder(reactElement, mainContainer)