export const getRouterInfo = (menuList,name) => {
    var curRouterInfo={}
    for(let routeObj of menuList){
        // 遍历数组中的对象中routeName是否== name
        if(routeObj.routeName == name){
            curRouterInfo = routeObj;
        }else{
            if(routeObj.childMenu){
                for(let childObj of routeObj.childMenu){
                    if(childObj.routeName == name){
                        curRouterInfo = childObj
                        curRouterInfo.subName = routeObj.menuName
                    }
                } 
            }
        }
    }
    return curRouterInfo;   
}