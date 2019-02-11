import Foundation

@objc(Panorama) class Panorama : CDVPlugin {

    func start(command: CDVInvokedUrlCommand) {        
        let v : ViewController = ViewController()
        self.viewController.addChildViewController(v)
        self.viewController.view.addSubview(v.view)
    }
}
