import Foundation

@objc(Panorama) class Panorama : CDVPlugin {

    func start(command: CDVInvokedUrlCommand) {        
        print("exec from plugin")
        let v : ViewController = ViewController()
        self.viewController.addChildViewController(v)
        self.viewController.view.addSubview(v.view)
    }
}
